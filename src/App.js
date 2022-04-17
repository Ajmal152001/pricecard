import './App.css';
import PriceCard from './Pricecard';

function App() {
  let data = [
  {
    Product:"FREE",
    Price:0,
    User:"Single User",
    UserBold:false,
    UserEnabler:true,
    Storage:"5GB Storage",
    StorageEnabler:true,
    PublicProjects:"Unlimited Public Projects",
    PublicProjectsBold:true,
    PublicProjectsEnabler:true,
    CommunityAccess:"CommunityAccess",
    CommunityAccessEnabler:true,
    PrivateProjects:"Unlimited Private Projects",
    PrivateProjectsEnabler:false,
    PrivateProjectsBold:false,
    PrivateProjectsMute:false,
    PhoneSupport:"Dedicated Phone Support",
    PhoneSupportMute:false,
    PhoneSupportEnabler:false,
    Subdomain:" Free Subdomain",
    SubdomainBold:false,
    SubdomainMute:false,
    SubdomainEnabler:false,
    StatusReports:"Monthly Status Reports",
    StatusReportsMute:false,
    StatusReportsEnabler:false
  },
  {
    Product:"PLUS",
    Price:9,
    User:"5 Users",
    UserBold:false,
    UserEnabler:true,
    Storage:"50GB Storage",
    StorageEnabler:true,
    PublicProjects:"Unlimited Public Projects",
    PublicProjectsBold:true,
    PublicProjectsEnabler:true,
    CommunityAccess:"CommunityAccess",
    CommunityAccessEnabler:true,
    PrivateProjects:"Unlimited Private Projects",
    PrivateProjectsBold:true,
    PrivateProjectsEnabler:true,
    PrivateProjectsMute:true,
    PhoneSupport:"Dedicated Phone Support",
    PhoneSupportMute:true,
    PhoneSupportEnabler:true,
    Subdomain:" Free Subdomain",
    SubdomainBold:false,
    SubdomainMute:true,
    SubdomainEnabler:true,
    StatusReports:"Monthly Status Reports",
    StatusReportsEnabler:false,
    StatusReportsMute:false,
  },
  {
    Product:"PRO",
    Price:9,
    User:"Unlimited Users",
    UserBold:true,
    UserEnabler:true,
    Storage:"150GB Storage",
    StorageEnabler:true,
    PublicProjects:"Unlimited Public Projects",
    PublicProjectsBold:true,
    PublicProjectsEnabler:true,
    CommunityAccess:"CommunityAccess",
    CommunityAccessEnabler:true,
    PrivateProjects:"Unlimited Private Projects",
    PrivateProjectsEnabler:true,
    PrivateProjectsBold:true,
    PrivateProjectsMute:true,
    PhoneSupport:"Dedicated Phone Support",
    PhoneSupportMute:true,
    PhoneSupportEnabler:true,
    Subdomain:"Unlimited Free Subdomain",
    SubdomainBold:true,
    SubdomainMute:true,
    SubdomainEnabler:true,
    StatusReports:"Monthly Status Reports",
    StatusReportsEnabler:true,
    StatusReportsMute:true,
  }
]
  return(
<>
<section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
        data.map((e)=>{
          return <PriceCard data={e}/>
        })
      }
      </div>
  </div>
</section>
</>
)  
  }
export default App;
