import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { authorized } from '../../../utils/axios';

const About = () => {
        const [value, setValue] = useState('');
        const [loading,setLoading] = useState(false)

            const getAboutUs = async() => {
                try {
                    setLoading(true)
            
                    const res = await authorized.get('/about-us')
                    
                    setValue(res?.data?.data)
                    setLoading(false)
                } catch (error:any) {
                    console.error(error?.response?.data?.message);
                    setLoading(false)
                }
            }
            
            useEffect(()=>{
            getAboutUs()
            },[])

    return (    
    <div className="pb-5 space-y-5">

        <div className='flex items-center lg:flex-row flex-col gap-5 justify-between'>
            <h4>About Us:</h4>
        </div>
        {        loading ? 'loading...' :     
                  <ReactQuill theme="snow" value={value} className='h-[500px]' onChange={(e:any)=>setValue(e)} />
                  }
        </div>
      
     
    )
}

export default About