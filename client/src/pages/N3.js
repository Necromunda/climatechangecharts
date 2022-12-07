import { Card, Grid, LinearProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import V1 from '../components/V1'
import V4 from '../components/V4'
import V5 from '../components/V5'
import V6 from '../components/V6'
import V7 from '../components/V7'
import V8 from '../components/V8'
import V9 from '../components/V9'

export default function N3() {
  // const [id, setId] = useState(null)
  const [viewData, setViewData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  const [stackedSelected, setStackedSelected] = useState(false)
  const [description, setDescription] = useState("Testi description")

  const [v1Description, setV1Description] = useState(null)
  const [v3Description, setV3Description] = useState(null)
  const [v4Description, setV4Description] = useState(null)
  const [v5Description, setV5Description] = useState(null)
  const [v6Description, setV6Description] = useState(null)
  const [v7Description, setV7Description] = useState(null)
  const [v8Description, setV8Description] = useState(null)
  const [v9Description, setV9Description] = useState(null)

  const [v1Selected, setV1Selected] = useState(false)
  const [v3Selected, setV3Selected] = useState(false)
  const [v4Selected, setV4Selected] = useState(false)
  const [v5Selected, setV5Selected] = useState(false)
  const [v6Selected, setV6Selected] = useState(false)
  const [v7Selected, setV7Selected] = useState(false)
  const [v8Selected, setV8Selected] = useState(false)
  const [v9Selected, setV9Selected] = useState(false)

  const params = useParams();

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:8080/${params.id}`);
    setViewData(data);
    setValues(data)
  };

  useEffect(() => { 
    getData()
  }, [])

  function setValues(view) {
    const viewObject = view[0]

    setStackedSelected(viewObject.stacked)
    setDescription(viewObject.description)

    setV1Selected(viewObject.v1)
    setV3Selected(viewObject.v3)
    setV4Selected(viewObject.v4)
    setV5Selected(viewObject.v5)
    setV6Selected(viewObject.v6)
    setV7Selected(viewObject.v7)
    setV8Selected(viewObject.v8)
    setV9Selected(viewObject.v9)

    setV1Description(viewObject.v1description)
    setV3Description(viewObject.v3description)
    setV4Description(viewObject.v4description)
    setV5Description(viewObject.v5description)
    setV6Description(viewObject.v6description)
    setV7Description(viewObject.v7description)
    setV8Description(viewObject.v8description)
    setV9Description(viewObject.v9description)

    setLoaded(true)
  }
  
  if (!isLoaded) {
    return <LinearProgress color="secondary" sx={{height: 15}} />
  } else {
    return (
      <Grid container spacing={6} sx={{mt: 1, mb: 6}}  direction={stackedSelected ? "row" : "column"} alignItems="center" justifyContent="center">
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v1Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V1 />
            <Typography sx={{mt: 2}}>{v1Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v3Selected}>
          <Card raised={true} sx={{p: 3}}>
            {/* <V3 /> */}
            <Typography sx={{mt: 2}}>{v3Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v4Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V4 />
            <Typography sx={{mt: 2}}>{v4Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v5Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V5 />
            <Typography sx={{mt: 2}}>{v5Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v6Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V6 />
            <Typography sx={{mt: 2}}>{v6Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v7Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V7 />
            <Typography sx={{mt: 2}}>{v7Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v8Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V8 />
            <Typography sx={{mt: 2}}>{v8Description}</Typography>
          </Card>
        </Grid>
        <Grid item xs={5} sx={{minWidth: {xs:400, sm: 600, md: 800}, minHeight: 450}} hidden={!v9Selected}>
          <Card raised={true} sx={{p: 3}}>
            <V9 />
            <Typography sx={{mt: 2}}>{v9Description}</Typography>
          </Card>
        </Grid>
      </Grid>
    )
  }
}