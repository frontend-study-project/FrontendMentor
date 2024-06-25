import classes from './section.module.css'

export default function Banner() {
  return (
    <div className={classes.wrap_banner}>
      <aside className="inner_cont">
        <strong>Boost your links today</strong>
        <button type="button" className="btn_bg">
          Get Started
        </button>
      </aside>
    </div>
  )
}
