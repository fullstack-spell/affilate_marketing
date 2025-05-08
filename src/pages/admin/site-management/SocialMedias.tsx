import { useEffect, useState } from "react"
import { authorized } from "../../../utils/axios"
import { Form, Input } from "antd"
import FormItem from "antd/es/form/FormItem"

const SocialMedias = () => {
        const [loading,setLoading] = useState(false)
        const [data,setData] = useState({})
        const [form] = Form.useForm()

    const getSocialMedias = async() => {
        try {
            setLoading(true)
    
            const res = await authorized.get('/social-media')
            
            setData(res?.data?.data)
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
    }
    
    useEffect(()=>{
    getSocialMedias()
    },[])

    return (
        <div className="pb-5">

        <div className='flex items-center lg:flex-row mb-3 flex-col gap-5 justify-between'>
            <h4>Social Medias</h4>
           </div>

{loading ? 'loading...':
  <Form 
  initialValues={data}
  onFinish={async (value) => {
    try {
        setLoading(true)

         await authorized.post(`/social-media`,value)
        
        form.resetFields() 
        getSocialMedias()
        setLoading(false)
    } catch (error:any) {
        console.error(error?.response?.data?.message);
        setLoading(false)
    }
  }}
  layout='vertical'
  form={form}
   size="large">
        <FormItem rules={[{required:true}]} label='Facebook' name={'facebook'}>
            <Input />
        </FormItem>
        <FormItem rules={[{required:true}]} label='Youtube' name={'youtube'}>
        <Input />
        </FormItem>
        <FormItem rules={[{required:true}]} label='Linkdin' name={'linkdin'}>
        <Input />
        </FormItem>
        <FormItem rules={[{required:true}]} label='Twitter' name={'twitter'}>
        <Input />
        </FormItem>
            <FormItem>
                <button type='submit' className='cursor-pointer w-[120px] text-center text-white rounded-sm py-2 bg-spell-purple'>Save</button>
            </FormItem>
    </Form>
}
    </div >
    )
}

export default SocialMedias