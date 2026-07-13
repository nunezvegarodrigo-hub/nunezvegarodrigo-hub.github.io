import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function TopNav({ displayClass }: QuartzComponentProps) {
  return (
    <nav class={classNames(displayClass, "topnav")}>
      <a href="/" class="topnav-brand">Rodrigo Nuñez</a>
      <div class="topnav-links">
        <a href="/essays">Essays</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/invisible-automation" class="topnav-cta">The flagship</a>
      </div>
    </nav>
  )
}

export default (() => TopNav) satisfies QuartzComponentConstructor
