import { Button, Drawer, Dropdown, Form, Input, Space, Table, Upload } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { authorized } from "../../../utils/axios"
import { FaPlus } from "react-icons/fa"

const Webinar = () => {
        const [loading,setLoading] = useState(false)
        const [open,setOpen] = useState<any>(false)
        const [data,setData] = useState([])
        const [form] = Form.useForm()

    const getWebinar = async() => {
        try {
            setLoading(true)
    
            const res = await authorized.get('/webinar')
            
            setData(res?.data?.data)
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }
    
    useEffect(()=>{
    getWebinar()
    },[])

    const deleteWebnar = async(id:string)=>{
           try {
            setLoading(true)

             await authorized.delete(`/webinar/${id}`)

            getWebinar()
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
    title: 'Link',
    dataIndex: 'link',
    key: 'link',
    width: 400,
},
{
    title: 'Date Time',
    dataIndex: 'date_time',
    key: 'date_time',
    width: 100,
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
                    onClick:()=>deleteWebnar(record?.id),
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
            <h4>Webniar</h4>
            <div onClick={()=>setOpen(true)} className='cursor-pointer text-white rounded-sm py-2 px-4 bg-spell-purple'>Add Webniar</div>
        </div>

        <Drawer
        title={typeof(open) === 'object'? "Update Webniar" :"Add Webniar"}
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
             await authorized.put(`/webinar/${open?.id}`,value) : 
             await authorized.post('/webinar',value)
            
            form.resetFields()
            setOpen(false)
            getWebinar()
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
            <FormItem rules={[{required:true}]} label='Link' name={'link'}>
            <Input />
            </FormItem>
            <FormItem rules={[{required:true}]} label='Date Time' name={'date_time'}>
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
            scroll={{ x: '1100' }}
            columns={columns}
            pagination={false}
            dataSource={data}
        />
    </div >
    )
}

export default Webinar