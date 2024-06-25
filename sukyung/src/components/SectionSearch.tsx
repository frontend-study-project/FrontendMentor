import classes from './section.module.css'

export default function SectionSearch() {
  return (
    <div className={classes.wrap_search}>
      <div className="inner_cont">
        <div className={classes.box_search}>
          <label htmlFor="link" className="screen_out">
            link
          </label>
          <input id="link" type="text" placeholder="Shorten a link here..." />
          <button className="btn_bg">Shorten It!</button>
        </div>
      </div>
    </div>
  )
}
