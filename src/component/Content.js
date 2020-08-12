import React from 'react'
import Care from './Care'
import Box from '@material-ui/core/Box';

export default function Content() {
    const cares = [
        {cname:"PGA1"},
        {cname:"PGA2"}
      ]
    const carelist = cares.map((care,i) => <Box pt={3} key={i}><Care name={care.cname} key={i} /></Box>)
    return (
        <div>
            {carelist}
        </div>
    )
}
