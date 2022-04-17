import React from 'react'
import PropTypes from 'prop-types'

function PriceCard(props) {
  return (
    <>
  
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.Product}</h5>
            <h6 class="card-price text-center">${props.data.Price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li">{props.data.UserEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.UserBold?<><b>{props.data.User}</b></>:props.data.User}</li>
              <li><span class="fa-li">{props.data.StorageEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.Storage}</li>
              <li><span class="fa-li">{props.data.PublicProjectsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.PublicProjectsBold?<><b>{props.data.PublicProjects}</b></>:props.data.PublicProjects}</li>
              <li><span class="fa-li">{props.data.CommunityAccessEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.CommunityAccess}</li>
              <li class={props.data.PrivateProjectsMute?" ":"text-muted"}><span class="fa-li">{props.data.PrivateProjectsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.PrivateProjectsBold?<><b>{props.data.PrivateProjects}</b></>:props.data.PrivateProjects}</li>
              <li class={props.data.PhoneSupportMute?" ":"text-muted"}><span class="fa-li">{props.data.PhoneSupportEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.PhoneSupport}</li>
              <li class={props.data.SubdomainMute?" ":"text-muted"}><span class="fa-li">{props.data.SubdomainEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.SubdomainBold?<><b>{props.data.Subdomain}</b></>:props.data.Subdomain}</li>
              <li class={props.data.StatusReportsMute?" ":"text-muted"}><span class="fa-li">{props.data.StatusReportsEnabler?<i class="fas fa-check"></i>:<i class="fas fa-times"></i>}</span>{props.data.StatusReports}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
         
    </>
  )
}

PriceCard.propTypes = {}

export default PriceCard
