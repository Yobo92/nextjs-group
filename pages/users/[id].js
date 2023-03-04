import Axios from "axios";
import { useRouter } from "next/router"

export default function Id() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h3>User id: {id} </h3>
            <h4>title: {props.userInfo.title}</h4>
            <h4>author: {props.userInfo.author}</h4>
        </div>
    )
}


export async function getServerSideProps(context) {
     let { data } = await Axios.get(`http://localhost:4000/posts/${context.params.id}`)
     
    return {
        props: {
             userInfo: data
        }
    }
}