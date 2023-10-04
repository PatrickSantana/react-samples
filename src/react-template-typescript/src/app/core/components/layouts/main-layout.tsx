import React from 'react';


const MainLayout: React.FC = ({ children }) => {

    return (
        <div>
            {/* <div>Layout</div> */}
            <div>{children}</div>
        </div>
    );
};
export default MainLayout;
