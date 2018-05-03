import * as pnp from 'sp-pnp-js';
export const uploadFile = (context: any, path: string, file: any, title: any): Promise < any > => {
  return pnp.sp.web.getFolderByServerRelativeUrl('/'+path).files.add(file.name, file, true).then(f => {
        f.file.getItem().then(item => {
            item.update({
                Title: title
            });
        });
    });
}
export const searchFile = (context: any, searchString: string, sourceId: string): Promise < any > => {
    return (pnp.sp.search({
        Querytext: '*' + searchString + '*',
        SourceId: sourceId
    }).then(searchResponse => {
        return searchResponse.PrimarySearchResults.map(searchItem => {
            return {
                Title: searchItem.Title.length > 15 ? `${searchItem.Title.substring(0,15)}...` : `${searchItem.Title}.${searchItem.FileType}`,
                Author: searchItem.Author,
                DirectLink: getDirectLink(searchItem),
                Created: new Date(searchItem.Write.toString()).toLocaleDateString(),
                ThumbNail: searchItem.PictureThumbnailURL
            }
        })
    }))
}
const getDirectLink = (item) => {
    return `${item.ParentLink}?id=${item.ParentLink.replace(item.SiteName,'').replace('/Forms/Thumbnails.aspx','')}/${item.Title}.${item.FileType}&parent=${item.ParentLink.replace(item.SiteName,'').replace('/Forms/Thumbnails.aspx','')}`;
}
