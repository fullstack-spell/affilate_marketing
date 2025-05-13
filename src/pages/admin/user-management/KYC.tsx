import { Table } from "antd"
import { useEffect, useState } from "react"
import { authorized } from "../../../utils/axios"

const KYC = () => {
        const [loading,setLoading] = useState(false)
        const [data,setData] = useState([])

    const getKYCs = async() => {
        try {
            setLoading(true)
    
            const res = await authorized.get('/kyc')
            
            setData(res?.data?.data)
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }
    
    useEffect(()=>{
    getKYCs()
    },[])

    
const columns = [{
    title: 'S.N',
    dataIndex: 'id',
    key: 'id',
    width: 70,
},
{
    title: 'User Name',
    dataIndex: 'user_name',
    key: 'user_name',
    width: 300,
},
{
    title: 'Father Name',
    dataIndex: 'father_name',
    key: 'father_name',
    width: 300,
},
{
    title: 'GrandFather Name',
    dataIndex: 'grand_father_name',
    key: 'grand_father_name',
    width: 300,
},
{
    title: 'Citizenship Front Image',
    dataIndex: 'citizenship_front_image',
    key: 'citizenship_front_image',
    width: 200,
    render:(text:string)=><img src={text} alt='' className="size-[50px] overflow-hidden"/>
},
{
    title: 'Citizenship Back Image',
    dataIndex: 'citizenship_back_image',
    key: 'citizenship_back_image',
    width: 200,
    render:(text:string)=><img src={text} alt='' className="size-[50px] overflow-hidden"/>
},
]

    return (
        <div className="pb-5">

        <div className='flex items-center lg:flex-row flex-col gap-5 justify-between'>
            <h4>KYCs</h4>
           </div>
        <Table
            loading={loading}
            tableLayout="fixed"
            scroll={{ x: '1370' }}
            columns={columns}
            pagination={false}
            dataSource={data}
        />
    </div >
    )
}

export default KYC