

const BioAndBalancesComponent = ({bio}) => {
  const getNameInitials = useCallback(() => {
    const nameArr = bio['name'].split(' ');
    const initials = nameArr[0].charAt(0) + nameArr[1].charAt(0);
    return initials;
  }, [bio.name]);
  return (
    <div>
        <div>
            <p>
                {

                }
            </p>
            <p>

            </p>
        </div>
        <div></div>
    </div>
  )
}

export default BioAndBalancesComponent