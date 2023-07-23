
function FaqCard(){
    return(
        <div className="bg-[]">
            <div className="p-4 text-black">
                <h1 className="font-semibold">Question 1: How does Focusly help me stay focused?</h1>
                <p></p>
            </div> 
        </div> 
    )
}


export default function Faq(){
    return(
        <div className="h-full">
            <div className="flex items-center justify-center">
                <h1 className="text-black font-bold">Frequently Asked Questions</h1>
                <h3 className="text-slate-500">We have put together some commonly asked questions.</h3>

                <div className="mx-4 grid grid-cols-1 md:grid-cols-2"><FaqCard /></div>
            </div>
        </div>
    )
}