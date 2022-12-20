import './styles.css'
import Button from '@material-ui/core/Button';
import "./App.css"

import { Table } from './Table'

export default function App() {
  const columns = [
    { accessor: 'date', label: 'Date' },
    { accessor: 'app_id', label: 'APP_ID' },
    { accessor: 'requests', label: 'Requests' },
    { accessor: 'responses', label: 'Responses' },
    { accessor: 'impressions', label: 'Impressions' },
    { accessor: 'clicks', label: 'clicks' },
    { accessor: 'revenue', label: 'revenue' }
  ]

  const rows = [{date:'2021-05-01T00:00:00Z',app_id:123456,requests:1075654,responses:1075654,impressions:1075289,clicks:1075053,revenue:447.7736131902344},{date:'2021-05-01T00:00:00Z',app_id:789652,requests:1018686,responses:1018657,impressions:1018170,clicks:1017740,revenue:273.688228475576},{date:'2021-05-01T00:00:00Z',app_id:741553,requests:1045248,responses:1045160,impressions:1045116,clicks:1044250,revenue:361.02435316384384},{date:'2021-05-01T00:00:00Z',app_id:986321,requests:1041540,responses:1041474,impressions:1040984,clicks:1040263,revenue:10.87658712691065},{date:'2021-05-01T00:00:00Z',app_id:320248,requests:1084124,responses:1084099,impressions:1083933,clicks:1083689,revenue:143.03850995952192},{date:'2021-05-02T00:00:00Z',app_id:123456,requests:1071200,responses:1071137,impressions:1070876,clicks:1070043,revenue:47.90007467156101},{date:'2021-05-02T00:00:00Z',app_id:789652,requests:1019330,responses:1019323,impressions:1018985,clicks:1018105,revenue:180.3988637016005},{date:'2021-05-02T00:00:00Z',app_id:741553,requests:1088571,responses:1088532,impressions:1088351,clicks:1087891,revenue:144.66292799152959},{date:'2021-05-02T00:00:00Z',app_id:986321,requests:1021322,responses:1021295,impressions:1021105,clicks:1020970,revenue:102.6334177722585},{date:'2021-05-02T00:00:00Z',app_id:320248,requests:1042628,responses:1042548,impressions:1042261,clicks:1041502,revenue:20.55123413724384},{date:'2021-05-03T00:00:00Z',app_id:123456,requests:1058458,responses:1058414,impressions:1058156,clicks:1057846,revenue:3.8197103179173557},{date:'2021-05-03T00:00:00Z',app_id:789652,requests:1055461,responses:1055453,impressions:1055232,clicks:1054454,revenue:159.38696559247703},{date:'2021-05-03T00:00:00Z',app_id:741553,requests:1052626,responses:1052565,impressions:1052117,clicks:1051278,revenue:131.38839836779843},{date:'2021-05-03T00:00:00Z',app_id:986321,requests:1009330,responses:1009271,impressions:1008867,clicks:1008606,revenue:42.42559156669738},{date:'2021-05-03T00:00:00Z',app_id:320248,requests:1093647,responses:1093606,impressions:1093161,clicks:1092221,revenue:1.4312769610660316}
]


  return (
    <div className="App">

    
      
      <div className='main_header'>
        <p>Analytics</p>
      </div>

      <div className='forms'>
        
      <input placeholder='Search date'/>

        <Button variant='contained' color='primary'>Settings</Button> 
      </div>

      <div className='rectangle_box'>
          <p>Dimensions and Metrics</p>
      
      <div className='rectangle_box_button'>

        <button className='bt1'><p>Date</p></button> 
        <button className='bt2'><p>App</p></button> 
        <button className='bt3'><p>Clicks</p></button> 
        <button className='bt4'><p>Ad Requests</p></button> 
        <button className='bt5'><p>Ad Response</p></button> 
        <button className='bt6'><p>Impression</p></button> 
        <button className='bt7'><p>Revenue</p></button> 
        <button className='bt8'><p>Fill Rate</p></button> 
        <button className='bt9'><p>CTR</p></button> 

      </div>

      <div className='close-bt'>
        <button className='close-bt1'>Close</button>
        <button className='close-bt2'>Apply Changes</button>
      </div>
      </div>

     

      <Table rows={rows} columns={columns} />
    </div>
  )
}
