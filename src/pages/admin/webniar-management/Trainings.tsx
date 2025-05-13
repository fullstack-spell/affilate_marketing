import { Button, Drawer, Dropdown, Form, Input, Select, Space, Table, Upload } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { authorized } from "../../../utils/axios"
import { FaPlus } from "react-icons/fa"

const Trainings = () => {
        const [loading,setLoading] = useState(false)
        const [open,setOpen] = useState<any>(false)
        const [data,setData] = useState([])
        const [form] = Form.useForm()

    const getTrainings = async() => {
        try {
            setLoading(true)
    
            const res = await authorized.get('/training')
            
            setData(res?.data?.data)
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }
    
    useEffect(()=>{
    getTrainings()
    },[])

    const deleteTraining = async(id:string)=>{
           try {
            setLoading(true)

             await authorized.delete(`/training/${id}`)

            getTrainings()
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }

const columns = [{
    title: 'S.N',
    dataIndex: 'id',
    key: 'id',
    width: 70,
},
{
    title: 'Title',
    dataIndex: 'tile',
    key: 'tile',
    width: 300,
},
{
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    width: 100,
    render:(text:string)=>text ? <img src={text} className="w-[80px] object-fill"/>:'-'
},
{
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 150,
},
{
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: 300,
},
{
    title: 'Action',
    width: 130,
    render: (_:any,record:any) => <div className='flex items-center gap-3'>
        <Dropdown menu={{
            items: [
                {
                    label: 'Edit/View',
                    key: '1',
                    onClick:()=>setOpen(record),
                },
                {
                    label: 'Delete',
                    onClick:()=>deleteTraining(record?.id),
                    key: '4',
                    danger: true,
                }]
        }}>
            <Button>
                <Space>
                    Manage
                    <MdKeyboardArrowDown size={20} />
                </Space>
            </Button>
        </Dropdown>
    </div>
},
]

    return (
        <div className="pb-5">

        <div className='flex items-center lg:flex-row flex-col gap-5 justify-between'>
            <h4>Trainings</h4>
            <div onClick={()=>setOpen(true)} className='cursor-pointer text-white rounded-sm py-2 px-4 bg-spell-purple'>Add Training</div>
        </div>

        <Drawer
        title={typeof(open) === 'object'? "Update Training" :"Add Training"}
        onClose={()=>{
            form.resetFields()
            setOpen(false)
        }}
        open={open}
      >
      <Form 
      onFinish={async (value) => {
        try {
            setLoading(true)
    
             typeof(open) === 'object'? 
             await authorized.put(`/training/${open?.id}`,value) : 
             await authorized.post('/training',value)
            
            form.resetFields()
            setOpen(false)
            getTrainings()
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
      }}
      layout='vertical'
      form={form}
       size="large">
            <FormItem rules={[{required:true}]} label='Title' name={'title'}>
                <Input />
            </FormItem>
            <FormItem rules={[{required:true}]} label='Type' name={'type'}>
            <Select 
            options={[
                {label:'Physical',value:'physical'},
                {label:'Online',value:'online'}
            ]}
            />
            </FormItem>
            <FormItem rules={[{required:true}]} label='Location' name={'location'}>
            <Input />
            </FormItem>
                   <FormItem rules={[{required:true}]} label='Image' name={'image'}>
  <Upload>
    <Button icon={<FaPlus />}>Upload</Button>
  </Upload>
            </FormItem>
           
                <FormItem>
                    <button type='submit' className='cursor-pointer text-white rounded-sm py-2 w-full bg-spell-purple'>Submit</button>
                </FormItem>
        </Form> 
      </Drawer>  

        <Table
            loading={loading}
            tableLayout="fixed"
            scroll={{ x: '1050' }}
            columns={columns}
            pagination={false}
            dataSource={data}
        />
    </div >
    )
}

export default Trainings