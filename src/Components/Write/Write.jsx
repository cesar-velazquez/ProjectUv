import React from 'react'
import FirstPartWrite from './FirstPartWrite'
import SecondPartWrite from './SecondPartWrite'
import ThirdParWrite from './ThirdParWrite'
import FourthPartWrite from './FourthPartWrite'
import FiveParWrite from './FiveParWrite'

const Write = () => {
    return (
        <main>
            <FirstPartWrite/>

            <section>
                <SecondPartWrite/>
            </section>

            <section>
                <ThirdParWrite/>                
            </section>

            <section>
                <FourthPartWrite/>
            </section>

            <section>
                <FiveParWrite/>
            </section>

        </main>
    )
}

export default Write