import React from 'react';
import favicon from '../../public/static/favicon.ico';
import Helmet from 'react-helmet';

const Layout = () => {

    return (
        <div>
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
        </div>
    );
}

export default Layout;