import React from 'react'

const Dashboard = () => {
    
  return (
    <>
        <main style={{marginTop: "58px"}} className='container overflow-scroll '>
            <div className='container pt-4  overflow-scroll border-black border-1 vh-100'>
            <section class="mb-4">
                <div class="card">
                    <div class="card-header py-3">
                        <h5 class="mb-0 text-center"><strong>Sales</strong></h5>
                    </div>
                    <div class="card-body">
                        {/* <canvas class="my-4 w-100" id="myChart" height="380"></canvas> */}
                    </div>
                </div>
            </section>
            </div>
        </main>
    </>
    )
}

export default Dashboard