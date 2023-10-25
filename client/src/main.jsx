import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import WebRoutes from './routes/WebRoutes';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId = {ChainId.Goerli}>
        <Router>
            <WebRoutes />
        </Router>
    </ThirdwebProvider>
)
