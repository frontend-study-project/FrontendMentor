import classes from './SectionStatistics.module.css'
import { IconBrandRecognition, IconDetailedRecords, IconFullyCustomizable } from '../assets/svg'

export default function SectionStatistics() {
  return (
    <div className={classes.wrap_statistics}>
      <div className="inner_cont">
        <h3>Advanced Statistics</h3>
        <p className={classes.desc_statistics}>
          Track how your links are performing across the web with our <br />
          advanced statistics dashboard.
        </p>
        <ul>
          <li className={classes.item_statistics}>
            <div className={classes.box_icon}>
              <IconBrandRecognition width={40} height={40} />
            </div>
            <strong>Brand Recognition</strong>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </li>
          <li className={classes.item_statistics}>
            <div className={classes.box_icon}>
              <IconDetailedRecords width={40} height={40} />
            </div>
            <strong>Detailed Records</strong>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </li>
          <li className={classes.item_statistics}>
            <div className={classes.box_icon}>
              <IconFullyCustomizable width={50} height={50} />
            </div>
            <strong>Fully Customizable</strong>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
