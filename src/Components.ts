abstract class Components {
  protected constructor(protected wrapper: HTMLElement) {}

  abstract render: () => void
}

export default Components
