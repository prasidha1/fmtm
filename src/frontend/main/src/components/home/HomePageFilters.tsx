import React from "react";
import windowDimention from "../../hooks/WindowDimension";
import CustomDropdown from "../../utilities/CustomDropdown";
import CoreModules from '../../shared/CoreModules';
import AssetModules from '../../shared/AssetModules';

//Home Filter
const HomePageFilters = () => {

    const defaultTheme: any = CoreModules.useSelector<any>(state => state.theme.hotTheme)
    const { windowSize } = windowDimention();
    const searchableInnerStyle: any = {
        toolbar: {
            marginTop: '0.7%',
            width: 250,
            fontFamily: defaultTheme.typography.h3.fontFamily,
            fontSize: defaultTheme.typography.h3.fontSize
        },
        outlineBtn: {
            width: 250,
            marginTop: '0.7%',
            borderRadius: 7,
            fontFamily: defaultTheme.typography.h3.fontFamily,
            fontSize: defaultTheme.typography.h3.fontSize
        },
        outlineBtnXs: {
            width: '50%',
            borderRadius: 7,
            fontFamily: defaultTheme.typography.h3.fontFamily,
            fontSize: defaultTheme.typography.h3.fontSize
        },
        toolbarXs: {
            width: '50%',
            fontFamily: defaultTheme.typography.h3.fontFamily,
            fontSize: defaultTheme.typography.h3.fontSize
        },

    }

    const Search = AssetModules.styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: AssetModules.alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: AssetModules.alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        opacity: 0.8,
        border: `1px solid ${theme.palette.info['main']}`,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = AssetModules.styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = AssetModules.styled(CoreModules.InputBase)(({ theme }) => ({
        color: 'primary',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            fontFamily: theme.typography.h3.fontFamily,
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <CoreModules.Box>

            {/* Explore project typography in mobile size */}
            <CoreModules.Box sx={{ display: { xs: windowSize.width <= 599 ? 'flex' : 'none', md: 'none' }, justifyContent: 'center' }}>
                <CoreModules.Typography
                    variant="subtitle2"
                    noWrap
                    mt={'2%'}
                    ml={'3%'}
                >
                    EXPLORE PROJECTS
                </CoreModules.Typography>
            </CoreModules.Box>
            {/* <======End======> */}

            {/* full Searchables container in md,lg,xl size */}
            <CoreModules.Stack sx={{ display: { xs: 'none', md: 'flex', } }} direction={'row'} spacing={2} justifyContent="center">
                <CoreModules.Button
                    variant="outlined"
                    color="error"
                    startIcon={<AssetModules.AutoAwesome />}
                    style={searchableInnerStyle.outlineBtn}
                >
                    Filters
                </CoreModules.Button>

                <CustomDropdown
                    color={'red'}
                    appearance={'ghost'}
                    names={['Urgent Projects',
                        'Active Projects',
                        'New Projects',
                        'Old Projects',
                        'Easy Projects',
                        'Challenging Projects'
                    ]}
                    toolBarStyle={searchableInnerStyle.toolbar}
                    text={"SORT BY"}
                    size={"lg"}
                />
                <Search id="search">
                    <SearchIconWrapper>
                        <AssetModules.SearchIcon color="info" />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        style={{ width: '100%' }}
                    />
                </Search>
            </CoreModules.Stack>
            {/* <======End======> */}

            {/* Search field in mobile size */}
            <CoreModules.Stack sx={{ display: { xs: 'flex', md: 'none', flexDirection: 'column', justifyContent: 'center', } }}>
                <Search id="searchXs">
                    <SearchIconWrapper>
                        <AssetModules.SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        style={{ width: '100%' }}
                    />
                </Search>
            </CoreModules.Stack>
            {/* <======End======> */}

            {/* filter and sort button in mobile size */}
            <CoreModules.Stack spacing={1} mt={'2%'} mb={'2%'} direction={'row'} sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', justifyContent: 'center' }}>
                <CoreModules.Button
                    variant="outlined"
                    color="error"
                    startIcon={<AssetModules.AutoAwesome />}
                    style={searchableInnerStyle.outlineBtnXs}
                >
                    Filters
                </CoreModules.Button>
                <CustomDropdown color={'red'} appearance={'ghost'} names={['Urgent Projects', 'Active Projects', 'New Projects', 'Old Projects', 'Easy Projects', 'Challenging Projects']} toolBarStyle={searchableInnerStyle.toolbarXs} text={"SORT BY"} size={"lg"} />
            </CoreModules.Stack>
            {/* <======End======> */}

        </CoreModules.Box>
    )
}

export default HomePageFilters;
