import { Button, Dropdown, Space, Table } from 'antd'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router'

const data = [
    {
        id: 250,
        image: 'https://spellhosting.com/assets/img/logo.png',
        name: 'sdfsdffsdf',
        description: 'sdfsdffsdf',
        point_wise_description: ['sdfsdffsdf', 'sdfsdffsdf', 'sdfsdffsdf'],
    },
]

const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 70,
},
{
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    width: 100,
    render: (text: string) => <img src={text} alt="image" className='w-10 h-10 rounded-full' />,
},
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
},
{
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 300,
},
{
    title: 'Points',
    dataIndex: ' point_wise_description',
    key: ' point_wise_description',
    width: 400,
    render: (text: string[]) => text?.map((item: string, index: number) => <div key={index} className='flex flex-col gap-1'>
        <span className='text-sm'>- {item}</span>
    </div>)
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

const Plans = () => {
    return (
        <div className="pb-5">

            <div className='flex items-center lg:flex-row flex-col gap-5 justify-between'>
                <h4>Plans</h4>
                <Link to='./add' className='cursor-pointer text-white rounded-sm py-2 px-4 bg-spell-purple'>Add Plans</Link>
            </div>

            {/* <Form layout='vertical' className='bg-gray-100 !p-3 !my-3 grid lg:grid-cols-6 grid-cols-1 gap-5'>
                <FormItem className='!mb-0' label='Client/Company Name' name={'client_company_name'}>
                    <Input />
                </FormItem>
                <FormItem className='!mb-0' label='Email Address' name={'email'}>
                    <Input type='email' />
                </FormItem>
                <FormItem className='!mb-0' label='Phone Number' name={'phone'}>
                    <Input type='number' />
                </FormItem>
                <FormItem className='!mb-0' label='Client Group' name={'client_group'}>
                    <Select options={[]} />
                </FormItem>
                <FormItem className='!mb-0' label='Status' name={'status'}>
                    <Select options={[]} />
                </FormItem>
                <div className='flex items-end gap-2'>
                    <FormList name="advance">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <div key={key} className="flex items-center space-x-3 w-full">
                                        <FormItem className='!mb-0'
                                            {...restField}
                                            name={[name, 'value']}
                                            rules={[{ required: true, message: 'Missing value' }]}
                                        >
                                            <Input suffix={<FaMinusCircle onClick={() => remove(name)} className="text-red-600 cursor-pointer text-[20px]" />} />
                                        </FormItem>

                                    </div>
                                ))}
                                <FormItem className='!mb-0'>
                                    <button type="button" onClick={() => add()} className=" cursor-pointer text-white rounded-sm py-1 px-3 flex items-center bg-spell-yellow">
                                        <AiOutlinePlus /> Advance
                                    </button>
                                </FormItem>
                            </>
                        )}
                    </FormList>
                    <FormItem className='!mb-0'>
                        <button type='submit' className='cursor-pointer text-white rounded-sm py-1 px-3 bg-spell-purple'>Search</button>
                    </FormItem>
                </div>
            </Form> */}

            <Table
                tableLayout="fixed"
                scroll={{ x: '1200' }}
                columns={columns}
                pagination={false}
                dataSource={data}
            />
        </div >
    )
}

export default Plans