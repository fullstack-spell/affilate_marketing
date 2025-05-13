import { Table } from "antd"
import { useEffect, useState } from "react"
import { authorized } from "../../../utils/axios"

const Users = () => {
        const [loading,setLoading] = useState(false)
        const [data,setData] = useState([])

    const getUsers = async() => {
        try {
            setLoading(true)
    
            const res = await authorized.get('/users')
            
            setData(res?.data?.data)
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }
    
    useEffect(()=>{
    getUsers()
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
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 500,
},
{
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    width: 200,
},
{
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 100,
},
{
    title: 'DOB',
    dataIndex: 'dob',
    key: 'dob',
    width: 200,
},
{
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300,
},
{
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    width: 150,
},
{
    title: 'Zip Code',
    dataIndex: 'zip_code',
    key: 'zip_code',
    width: 150,
},
{
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 150,
    render:(text:string)=>text ? <img src={text} alt="" className="w-[80px]"/>:'-'
},
{
    title: 'Refered By',
    dataIndex: 'referral_name',
    key: 'referral_name',
    width: 300,
},
{
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 150,
},
]

    return (
        <div className="pb-5">

        <div className='flex items-center lg:flex-row flex-col gap-5 justify-between'>
            <h4>Users</h4>
           </div>
        <Table
            loading={loading}
            tableLayout="fixed"
            scroll={{ x: '2570' }}
            columns={columns}
            pagination={false}
            dataSource={data}
        />
    </div>
    )
}

export default Users