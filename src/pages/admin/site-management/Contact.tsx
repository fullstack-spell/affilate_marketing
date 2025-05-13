import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";
import { authorized } from "../../../utils/axios";

const Contact = () => {
         const [data, setData] = useState({});
            const [loading,setLoading] = useState(false)
                 const [form] = Form.useForm()

                     const getContacts = async() => {
                         try {
                             setLoading(true)
                     
                             const res = await authorized.get('/contact-us')
                             
                             setData(res?.data?.data)
                             setLoading(false)
                         } catch (error:any) {
                             console.error(error?.response?.data?.message);
                             setLoading(false)
                         }
                     }
                     
                     useEffect(()=>{
                     getContacts()
                     },[])

    return (
        <div className="pb-5 space-y-5">
        
                <div className='flex items-center lg:flex-row flex-col gap-5 justify-between'>
                    <h4>Contact Us:</h4>
                </div>
                {        loading ? 'loading...' :     
                      <div className="grid gird-cols-2 gap-10">
<Form 
initialValues={data}
      onFinish={async (value) => {
        try {
            setLoading(true)

             await authorized.post('/contact-us',value)
            
            form.resetFields()
            getContacts()
            setLoading(false)
        } catch (error:any) {
            console.error(error?.response?.data?.message);
            setLoading(false)
        }
      }}
      layout='vertical'
      form={form}
       size="large">
       <Form.Item label="Number">
    <Form.List name="number">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <div
              key={key}
              style={{
                display: 'flex',
                gap: 8,
                marginBottom: 8,
              }}
            >
              <Form.Item
                {...restField}
                name={name}
                rules={[{ required: true, message: 'Please enter a number' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter contact number" />
              </Form.Item>
              <Button
                type="text"
                danger
                onClick={() => remove(name)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block>
              + Add Number
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  </Form.Item>

  <Form.Item>
  <FormItem>
                    <button type='submit' className='cursor-pointer text-white max-w-[200px] rounded-sm py-2 w-full bg-spell-purple'>Submit</button>
                </FormItem>
  </Form.Item>
</Form>
                      </div>
                          }
                </div>
    )
}

export default Contact