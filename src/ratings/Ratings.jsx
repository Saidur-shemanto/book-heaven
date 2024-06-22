import { useLoaderData } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";




const Ratings = () => {
    const books = useLoaderData()
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart

                data={books}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating" fill="#8884d8" />

            </BarChart>
        </ResponsiveContainer>
    )
};

export default Ratings;
