type RegisterProps = {
  element: HTMLElement
  callback: (isIntersectin: boolean) => void
}

export class AnimationsObserver {
  static observer: IntersectionObserver | null = null
  static observedConfig: Record<string, RegisterProps["callback"]> = {}

  static register({ element, callback }: RegisterProps) {
    if (!this.observer) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting, target }) => {
          const callback = this.observedConfig[target.id]

          callback(isIntersecting)
        })
      })
    }

    this.observedConfig[element.id] = callback
    this.observer.observe(element)
  }

  static unregister(element: HTMLElement) {
    if (!this.observer) {
      return
    }

    delete this.observedConfig[element.id]
    this.observer.unobserve(element)
  }
}
