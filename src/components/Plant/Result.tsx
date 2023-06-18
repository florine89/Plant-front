import ResultItem from './ResultItem';

function ResultList({ data }:any) {
  console.log('result data', data)
  return (
    <ul className="pl-4 flex">
      {data.map((item:any) => (
        <ResultItem
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
}

export default ResultList;
