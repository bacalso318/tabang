
import { Button } from "@mui/material"
import BlankLayout from "src/@core/layouts/BlankLayout";
import BlankLayoutAppBar from "src/@core/layouts/components/blank-layout-with-appBar";


const Job = () => {

  function handleClick() {
    alert("Hello React!");
  }

  return (
    <>
      <h1>Job</h1>
      <Button onClick={handleClick} variant="contained">
        CLICK ME
      </Button>
    </>
  )
}

export default Job
