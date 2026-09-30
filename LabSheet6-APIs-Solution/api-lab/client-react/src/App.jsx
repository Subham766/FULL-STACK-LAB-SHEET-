import{useEffect,useState}from"react";import axios from"axios";import"./style.css";
const API=import.meta.env.VITE_API_URL||"http://localhost:5000/api",KEY="lab123";
export default function App(){
 const[tasks,setTasks]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState(""),[title,setTitle]=useState("");
 useEffect(()=>{fetch(`${API}/tasks`).then(async r=>{const d=await r.json();if(!r.ok)throw Error(d.error||"Failed");return d}).then(d=>{setTasks(d);setLoading(false)}).catch(e=>{setError(e.message);setLoading(false)})},[]);
 const add=async e=>{e.preventDefault();if(!title.trim())return setError("Task title is required");try{setError("");const r=await fetch(`${API}/tasks`,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":KEY},body:JSON.stringify({title,completed:false})});const d=await r.json();if(!r.ok)throw Error(d.error||"Failed");setTasks(x=>[...x,d]);setTitle("")}catch(e){setError(e.message)}};
 const del=async id=>{try{const r=await fetch(`${API}/tasks/${id}`,{method:"DELETE",headers:{"x-api-key":KEY}});const d=await r.json();if(!r.ok)throw Error(d.error||"Failed");setTasks(x=>x.filter(t=>t.id!==id))}catch(e){setError(e.message)}};
 const axiosLoad=async()=>{try{setLoading(true);const r=await axios.get(`${API}/tasks`);setTasks(r.data)}catch(e){setError(e.response?.data?.error||e.message)}finally{setLoading(false)}};
 if(loading)return <h2>Loading...</h2>;
 return <div className="container"><h1>Task Manager</h1>{error&&<p className="error">{error}</p>}
 <form onSubmit={add}><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter task"/><button>Add Task</button></form>
 <button onClick={axiosLoad}>Reload using Axios</button><ul>{tasks.map(t=><li key={t.id}><span>{t.title} - {t.completed?"Completed":"Pending"}</span><button onClick={()=>del(t.id)}>Delete</button></li>)}</ul></div>;}