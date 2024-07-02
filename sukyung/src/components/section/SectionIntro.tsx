import classes from './SectionIntro.module.css'
export default function SectionIntro() {
  return (
    <div>
      <div className={`inner_cont ${classes.inner_intro}`}>
        <div className={classes.wrap_img}>
          <img src="/src/assets/illustration-working.svg" alt="" />
        </div>
        <div className={classes.wrap_txt}>
          <h3>
            More than just <br /> shorter links
          </h3>
          <p>
            Build your brand’s recognition and get detailed insights <br />
            on how your links are performing.
          </p>
          <button type="button" className="btn_bg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
