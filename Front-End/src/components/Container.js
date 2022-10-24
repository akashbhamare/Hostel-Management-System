import React from 'react';
// import "antd/lib/table/index.less";
// import 'antd/dist/antd.css';

const Container = props => (
    <div style={{width:'1100px',height:'50vh', margin:'20px auto'}}>
        {props.children}
    </div>
);

export default Container;