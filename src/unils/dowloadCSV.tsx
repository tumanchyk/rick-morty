import { saveAs } from 'file-saver';
import ICharacterItem from '../types/characterItem';

const downloadCSV = (list: ICharacterItem[]) => {
  const csvData = list.map(item => {
    return `${item.id},${item.name},${item.status},${item.species},${item.origin.name},${item.location.name},${item.image}`;
  }).join('\n');

  const blob = new Blob([csvData], { type: 'text/csv' });
  saveAs(blob, 'characters_data.csv');
};
export default downloadCSV;