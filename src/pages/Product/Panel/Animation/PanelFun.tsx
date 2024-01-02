import './PanelFun.css'
import PanelHero from '../../../../components/Panel/Panel.hero'
import PanelStart from '../../../../components/Panel/Panel.start'

function Panel() {
  return (
    <div className='panel-page'>
      <PanelHero/>
      <PanelStart/>
    </div>
  )
}

export default Panel