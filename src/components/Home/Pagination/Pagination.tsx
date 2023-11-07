import { Pagination, ConfigProvider } from 'antd';
import type { PaginationProps } from 'antd';

const PaginationBar = ({ setCurrentPage, currentPage }) => {
    
    const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  return <div style={{ display: "flex", justifyContent: "center" }}>
      <ConfigProvider
        theme={{
        token: {
          colorPrimary: "#202329",
            colorText: "#F5F5F5",
            fontSize: 16,
            borderRadius: 4,
            colorBgTextHover: "#9E9E9E",
            colorBgTextActive: "#F5F5F5",

        },
        components: {
          Pagination: {
            itemSize: 34,
            itemActiveBg: "#F5F5F5",
            colorTextDisabled: "#9E9E9E",
            
          }
        }
      }}>
      <Pagination current={currentPage} onChange={onChange} total={300} pageSize={20} showSizeChanger={false} />
      </ConfigProvider>
    </div>
}
export default PaginationBar;