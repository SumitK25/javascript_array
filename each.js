function each(elements,cb)
{
    if (!elements || !cb)
    {
        return true;
    }
    if (Array.isArray(elements) && typeof cb === 'function')
    {
        for (let i = 0; i < elements.length; i++)
        {
            cb(elements[i],i,elements);
        }
    }
    else
    {
        return false;
    }
}


module.exports = {each}
