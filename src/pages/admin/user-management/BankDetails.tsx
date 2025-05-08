import { Table } from "antd"
import { useEffect, useState } from "react"
import { authorized } from "../../../utils/axios"

const BankDetails = () => {
        const [loading,setLoading] = useState(false)
        const [data,setData] = useState([])

    const getBankDetails = async() => {
        try {
            setLoading(true)
    
            const res = await authorized.get('/bank-details')
            
            setData(res?.data?.data)
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }
    
    useEffect(()=>{
    getBankDetails()
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
    title: 'Bank Name',
    dataIndex: 'bank_name',
    key: 'bank_name',
    width: 500,
}
]

    return (
        <div className="pb-5">

        <div className='flex items-center lg:flex-row flex-col gap-5 justify-between'>
            <h4>Bank Details</h4>
           </div>
        <Table
            loading={loading}
            tableLayout="fixed"
            scroll={{ x: '870' }}
            columns={columns}
            pagination={false}
            dataSource={data}
        />
    </div>
    )
}

export default BankDetails