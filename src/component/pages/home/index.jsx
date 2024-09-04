import React, { useState } from 'react'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid2';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { MdOutlineCopyAll } from 'react-icons/md';
const Home = () => {
    const [jsonData, setJsonData] = useState({});
    const getJsonFieldChanger = (ev) => {
        setJsonData(ev.target.value)
    }
    const handleGetData = () => {
        const verifyObject = jsonData;
        try {
            const jsonObject = JSON.parse(verifyObject);
            console.log(typeof jsonObject);
            console.log(jsonObject);
            const renderJson = (jsonObject) => {
                if (!jsonObject) return null;
            
                return (
                  <pre>
                    {Object.entries(jsonObject).map(([key, value]) => (
                      <div key={key} className={key === 'sno' ? 'hoverable' : ''}>
                        <strong>{key}:</strong> {JSON.stringify(value)}
                      </div>
                    ))}
                  </pre>
                );
              };
              setJsonData(renderJson)
        } catch (error) {
            console.log(error);
            alert("Invalid JSON data");
        }
    }
    return (
        <div className='homePage'>
            <Box className="paddingY">
                <Grid
                    container
                    marginTop={6}

                    justifyContent="center"
                    alignItems="center">
                    <Grid size={8} className='title-head'>
                        <h1 className='title'>GET ACCESS KEY FROM JSON</h1>
                    </Grid>

                </Grid>
            </Box>

            <Box className="paddingY">
                <Grid container spacing={3} >
                    <Grid size={{ xs: 12, md: 6 }}>
                        <label className='jsonLabel'>Enter JSON Data</label>
                        <textarea className='jsonInput mt-3' onChange={getJsonFieldChanger}></textarea>
                        <span className='text-red-800 text-[12px]'>JSON IS NOT VALID</span>
                        <div className='outputKeyPath'>
                            <label className='jsonLabel'>Full key path :-</label>
                            <div className='outputContainer  mt-3'>
                                <ul>
                                    <li className='flex items-center justify-between mb-1'><span className='font-bold  darkHeading text-2xl '>KEY : </span><span className='keyName'>Data.address.city.name <MdOutlineCopyAll /></span></li>
                                    <li className='flex items-center justify-between'><span className='font-bold  darkHeading text-2xl '>VALUE : </span><span className='keyName'>Moradabad <MdOutlineCopyAll /></span></li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <label className='jsonLabel'>Perform a Action</label>
                        <div className='actionCard mt-3'>

                            <Autocomplete
                                className='selectBox'
                                const options={[
                                    { label: 'The Godfather', id: 1 },
                                    { label: 'Pulp Fiction', id: 2 },
                                ]}

                                renderInput={(params) => <TextField {...params} label="SELECT KEY" />}
                            />
                            <button className='actionBtn' onClick={handleGetData}>GET FULL ACCESS KEY</button>
                        </div>
                        <label className='jsonLabel'>OUTPUT</label>
                        <div className='outputCard mt-3'>
                            <div className='boxWrapper'>
                                <div className='box'>box1</div>
                                <div className='downLine'></div>
                                <div className='straightLine'></div>
                            </div>
                            {
                                Array.from({ length: 5 }).map((_box, index) => (
                                    <div key={index} className='boxWrapper' style={{
                                        marginLeft: `${index}99px`,
                                        marginTop: "-26px"
                                    }}>
                                        <div className='box'>box1</div>
                                        <div className='downLine'></div>
                                        <div className='straightLine'></div>
                                    </div>
                                ))
                            }

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default Home