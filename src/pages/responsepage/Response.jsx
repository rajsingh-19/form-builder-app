import {React, useState} from "react";
import { fetchFormAnalytics } from "../../services/index";
import { useParams } from "react-router-dom";
import { PieChart } from 'react-minimal-pie-chart';
import styles from "./response.module.css";
import FlowRespNav from "../../components/flowrRsponsNav/FlowRespNav";

const Response = () => {
    const { formId } = useParams();
    const [analytics, setAnalytics] = useState(null);

    // useEffect(() => {
    //     const fetchAnalytics = async () => {
    //       try {
    //         const data = await fetchFormAnalytics(formId);
    //         setAnalytics(data);
    //       } catch (err) {
    //         setError(err.message);
    //       }
    //     };
    //     fetchAnalytics();
    // }, []);
    
    if (error) {
        return <div>Error: {error}</div>;
    };
    
    if (!analytics) {
        return <div>Loading...</div>;
    };

    return (
        <div>
            <FlowRespNav />
            {analytics && (
            <div>
                {/*         stats container      */}
                <div>
                    <div>
                        <div>
                            <p>Views</p>
                            <p>6</p>
                        </div>
                        <div>
                            <p>starts</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
                <div>
                    table
                </div>
                {/*         pie chart container      */}
                <div>
                    <div>pie chart
                        <PieChart
                            data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' }
                            ]} 
                        />;
                    </div>
                    <div>completion rate</div>
                </div>
            </div>
        )}
        </div>
    )
}

export default Response;
