const { useEffect } = require("react")

const App =  () => {

  useEffect(()=>{
    console.log('useEffect called');
  })
  return (
    <div>
      <div className="max-w-2xl m-5 border "></div>
    </div>
  )
}