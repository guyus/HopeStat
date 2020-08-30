import React from 'react'

export default function Util() {
    return (
        <div>
            
        </div>
    )
}
export const SundayDate = (rtype) => {
    const d = new Date()  
    const d1 = new Date(d.setDate(d.getDate() - d.getDay()))
    d1.setUTCHours(0,0,0,0)
    let rdate = ''
    if (rtype === 'local')
        rdate = d1.toLocaleDateString()
    else if (rtype === 'str')
        rdate = d1.toDateString()
    else
        rdate = d1.toISOString()
    return rdate;
} 
