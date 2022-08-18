import React, { Component } from 'react'

export default class Items extends Component {
  render() {
    return (
      <div className='row1'>

        <div className='col-top'>

          <div className=' col-item col-item1 bg-light'>
            <div className='item1 item '>
              <i class="fa-solid fa-tv"></i>
            </div>
            <h4>Fresh new layout</h4>
            <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
          </div>
          <div className=' col-item col-item2 bg-light'>
            <div className='item2 item'>
              <i class="fa-solid fa-cloud-arrow-down"></i>

            </div>
            <h4>Free to download</h4>
            <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
          </div>
          <div className=' col-item col-item3 bg-light'>
            <div className='item3 item'>
              <i class="fa-regular fa-rectangle-list"></i>

            </div>
            <h4>Jumbotron hero header</h4>
            <p>The heroic part of this template is the jumbotron hero header!</p>
          </div>
        </div>


        <div className='col-bottom'>

          <div className=' col-item col-item4 bg-light'>
            <div className='item4 item'>
              <i class="fa-brands fa-bootstrap"></i>
            </div>
            <h4>
              Feature boxes</h4>
            <p>We've created some custom feature boxes using Bootstrap icons!</p>
          </div>
          <div className=' col-item col-item5 bg-light'>
            <div className='item5 item'>
              <i class="fa-solid fa-code"></i>

            </div>
            <h4>Simple clean code</h4>
            <p>We keep our dependencies up to date and squash bugs as they come!</p>
          </div>
          <div className=' col-item col-item6 bg-light'>
            <div className='item6 item'>
              <i class="fa-solid fa-square-check"></i>

            </div>
            <h4>A name you trust</h4>
            <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
          </div>
        </div>


      </div>
    )
  }
}
