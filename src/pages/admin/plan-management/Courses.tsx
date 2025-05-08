import { useEffect, useState } from "react"
import { authorized } from "../../../utils/axios"
import { Button, Drawer, Dropdown, Form, Input, Space, Table } from "antd"
import { Link } from "react-router"
import { MdKeyboardArrowDown } from "react-icons/md"
import FormItem from "antd/es/form/FormItem"

const Courses = () => {
        const [loading,setLoading] = useState(false)
        const [open,setOpen] = useState<any>(false)
        const [data,setData] = useState([])
        const [form] = Form.useForm()

    const getCouruses = async() => {
        try {
            setLoading(true)
    
            const res = await authorized.get('/course')
            
            setData(res?.data?.data)
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }
    
    useEffect(()=>{
    getCouruses()
    },[])

    
const columns = [{
    title: 'S.N',
    dataIndex: 'id',
    key: 'id',
    width: 70,
},
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 300,
},
{
    title: 'Link',
    dataIndex: 'link',
    key: 'link',
    width: 400,
},
{
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    width: 100,
},
{
    title: 'Action',
    width: 130,
    render: () => <div className='flex items-center gap-3'>
        <Dropdown menu={{

            items: [
                {
                    label: <Link to='./view'>View</Link>,
                    key: '1'
                },
                {
                    label: 'Delete',
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
            <h4>Courses</h4>
            <div onClick={()=>setOpen(true)} className='cursor-pointer text-white rounded-sm py-2 px-4 bg-spell-purple'>Add Course</div>
        </div>

        <Drawer
        title={typeof(open) === 'object'? "Update Course" :"Add Course"}
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
             await authorized.put(`/course/${open?.id}`,value) : 
             await authorized.post('/course',value)
            
            form.resetFields()
            setOpen(false)
            getCouruses()
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
      }}
      layout='vertical'
      form={form}
       size="large">
            <FormItem rules={[{required:true}]} label='Name' name={'name'}>
                <Input />
            </FormItem>
            <FormItem rules={[{required:true}]} label='Link' name={'link'}>
            <Input />
            </FormItem>
            <FormItem rules={[{required:true}]} label='Time' name={'time'}>
            <Input />
            </FormItem>
           
                <FormItem>
                    <button type='submit' className='cursor-pointer text-white rounded-sm py-2 w-full bg-spell-purple'>Submit</button>
                </FormItem>
        </Form> 
      </Drawer>  

        <Table
            loading={loading}
            tableLayout="fixed"
            scroll={{ x: '1000' }}
            columns={columns}
            pagination={false}
            dataSource={data}
        />
    </div >
    )
}

export default Courses