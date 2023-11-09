import React from "react";
import { Pagination, ConfigProvider } from "antd";


import { useSelector } from "react-redux";

import { selectTotalCharacters } from "../../../store/characters/charactersSelectors";

import type { PaginationProps } from "antd";


interface PaginationBarProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const PaginationBar: React.FC<PaginationBarProps> = ({ setCurrentPage, currentPage }) => {
    const total = useSelector(selectTotalCharacters);

    const onChange: PaginationProps["onChange"] = (page) => {
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
            
                    },
                },
            }}>
            <Pagination current={currentPage} onChange={onChange} total={total} pageSize={20} showSizeChanger={false} />
        </ConfigProvider>
    </div>;
};
export default PaginationBar;