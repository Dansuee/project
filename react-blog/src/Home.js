
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 const json = 'http://localhost:8000/blogs';
 const {data: blogs, isLoading, error } = useFetch(json)


    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
          {blogs && <BlogList blogs={ blogs } title = "All Blogs"/>}
        </div>
     );
}
 
export default Home;