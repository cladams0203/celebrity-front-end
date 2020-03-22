import React, { useState, useEffect } from 'react'

import api from '../utils/api'

export function CelebContainer () {
    const [celeb, setCeleb] = useState()

    useEffect(() => {
        api().get('/celebs')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>

        </div>
    )
}