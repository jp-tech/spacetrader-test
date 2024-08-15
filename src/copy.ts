export const COPY = {
    components: {
        buttons: {
            startGame: 'START GAME',
            loading: 'LOADING....',
            accept: 'Accept'
        },
        formsFields: {
            userName: 'Username',
            selectFaction: 'Select Faction'
        },
        statusLabels: {
            accepted: 'Accepted',
            pending: 'Pending',
        },
        tables: {
            contracts: {
                headers: ["CONTRACT TYPE", "AMOUNT", "STATUS", ""],
            },
            userSummary: {
                headers: ["AGENT", "HQ", "FACTION", "SHIPS", "BALANCE" ]
            },
            ships: {
                headers: ["SHIP NAME", "FUEL", "CAPACITY", "SPEED", "CREW", "CONDITION"]
            }
        }
    },
    errors: {
        unexpected: 'An unexpected error occured, please try again'
    },
    pages: {
        startGame: {
            header: 'Welcome to Space Traders 🚀',
        },
        notFound: {
            header: 'Not Found :('
        }
    }
}