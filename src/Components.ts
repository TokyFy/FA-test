abstract class Components<T extends HTMLElement = HTMLElement> {
  protected constructor(protected wrapper: T) {}

  abstract render: () => void
}

export default Components
