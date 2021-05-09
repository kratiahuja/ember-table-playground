import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class WalletSavedViewTableComponent extends Component {
  @computed()
  get columns() {
    return [
      { name: 'A', valuePath: 'A', width: 180 },
    ];
  }

  @computed()
  get rows() {
    return [
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
    ];
  }
}
