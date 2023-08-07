import TemplateSearchBar from './template'

type SearchBarType = {
    buttonText: string
    placeholderText?: string
}

export default function SearchBar({
    buttonText,
    placeholderText
}: SearchBarType) {
    return (
        <TemplateSearchBar
            buttonText={buttonText}
            placeholderText={placeholderText}
        />
    )
}
