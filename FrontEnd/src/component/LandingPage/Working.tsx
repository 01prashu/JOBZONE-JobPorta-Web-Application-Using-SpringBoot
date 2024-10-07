import { Work } from "../Data/Data"

const Working = () => {
    return (
        <div >
            <div className="text-4xl text-center mb-5 text-mine-shaft-200">How it<span className="text-bright-sun-400"> Works</span> </div>

            <div className="text-lg text-mine-shaft-200 text-center w-1/2 mx-auto">Effortlessly navigate through the process and land your dream job.</div>

            <div className="flex gap-5 justify-between items-center mt-10 relative">
                <div className="flex items-center justify-center ml-20">
                    <div className="p-5  items-center">
                        <img className="w-[23rem]" src="/Working/Working-Girl.png"></img>
                    </div>
                </div>
                <div className=" absolute left-[55%]">
                    {
                        Work.map((item,index)=><div key={index} className="flex items-center gap-7 m-7   ">
                        <div className="bg-bright-sun-400 rounded-3xl  ">
                            <div><img className="w-18 h-14 p-2 " src={`Working/${item.name}.png`}></img></div>
                        </div>
                        <div>
                            <div className="text-mine-shaft-200 font-semibold text-xl">{item.name}</div>
                            <div className="text-mine-shaft-300">{item.des}</div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Working