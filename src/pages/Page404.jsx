import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="404-page">
            <h1>The page you are looking for</h1>
            <p>does not exist</p>
            <p>Go back to the <Link to="/">frontpage</Link></p>
        </div>
    )
}

export default Page404;